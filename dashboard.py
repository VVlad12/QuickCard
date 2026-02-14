import json
from pathlib import Path
from typing import Any, Dict, List, Tuple

from dash import Dash, Input, Output, State, dcc, html, no_update, callback_context
import dash_ag_grid as dag
import dash_mantine_components as dmc

DATA_FILE_PATH = Path(__file__).parent / "test.json"


def load_json_data(path: Path) -> Dict[str, Any]:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def build_row_index(raw: Dict[str, Any]) -> Tuple[List[Dict[str, Any]], Dict[str, Tuple[str, str, int]]]:
    rows: List[Dict[str, Any]] = []
    id_to_path: Dict[str, Tuple[str, str, int]] = {}

    for language_key, language_data in raw.items():
        # language_data maps category -> list
        for category_key, items in language_data.items():
            if not isinstance(items, list):
                # Skip non-list sections if present
                continue
            for idx, item in enumerate(items):
                row_id = f"{language_key}:{category_key}:{idx}"
                id_to_path[row_id] = (language_key, category_key, idx)

                row: Dict[str, Any] = {
                    "row_id": row_id,
                    "language": language_key,
                    "category": category_key,
                    "word": item.get("word", ""),
                    "translation": item.get("translation", ""),
                }
                # Include pinyin in grid where present (e.g., Chinese)
                if "pinyin" in item:
                    row["pinyin"] = item.get("pinyin", "")
                else:
                    row["pinyin"] = ""  # Always include pinyin column
                rows.append(row)

    return rows, id_to_path


def get_item_by_row_id(raw: Dict[str, Any], id_to_path: Dict[str, Tuple[str, str, int]], row_id: str) -> Dict[str, Any]:
    language_key, category_key, idx = id_to_path[row_id]
    return raw[language_key][category_key][idx]


def set_item_by_row_id(raw: Dict[str, Any], id_to_path: Dict[str, Tuple[str, str, int]], row_id: str, new_item: Dict[str, Any]) -> None:
    language_key, category_key, idx = id_to_path[row_id]
    raw[language_key][category_key][idx] = new_item


# Initialize data
try:
    raw_data = load_json_data(DATA_FILE_PATH)
    grid_rows, id_path_index = build_row_index(raw_data)
except Exception as e:
    # Fallback data if file doesn't exist or is invalid
    print(f"Warning: Could not load data file: {e}")
    raw_data = {"english": {"example": [{"word": "hello", "translation": "greeting"}]}}
    grid_rows, id_path_index = build_row_index(raw_data)


app = Dash(__name__)
app.title = "Vocabulary Dashboard"


app.layout = dmc.MantineProvider(html.Div(
    [
        dcc.Store(id="json-store", data=raw_data),
        dcc.Store(id="index-store", data=id_path_index),
        dcc.Store(id="grid-rows-store", data=grid_rows),
        dcc.Store(id="update-trigger", data=0),  # Add update trigger
        dcc.Download(id="download-json"),
        dmc.Grid(
        children=[
            dmc.GridCol(children=[
                html.H2("Vocabulary Dashboard"),
                html.Div(
                    [
                        dag.AgGrid(
                            id="words-grid",
                            columnDefs=[
                                {"field": "language", "headerName": "Language", "filter": True, "sortable": True},
                                {"field": "category", "headerName": "Category", "filter": True, "sortable": True},
                                {"field": "word", "headerName": "Word", "filter": True, "sortable": True},
                                {"field": "translation", "headerName": "Translation", "filter": True, "sortable": True},
                                {"field": "pinyin", "headerName": "Pinyin", "filter": True, "sortable": True},
                            ],
                            rowData=grid_rows,
                            defaultColDef={"resizable": True, "flex": 1},
                            dashGridOptions={"animateRows": True, "rowHeight": 36, "rowSelection": "single"},
                            style={"height": "50vh", "width": "100%"},
                        ),
                    ],
                    style={"marginBottom": "16px"},
                )],
                span=6),
            dmc.GridCol(children=[
                html.H3("Edit Selected Entry"),
                html.Div(
            [
                html.Div(id="selected-meta", style={"marginBottom": "8px", "fontStyle": "italic"}),

                html.Div(
                    [
                        html.Label("Word"),
                        dcc.Input(id="field-word", type="text", style={"width": "100%"}, value=""),
                    ],
                    style={"marginBottom": "8px"},
                ),
                html.Div(
                    [
                        html.Label("Translation (English)"),
                        dcc.Input(id="field-translation", type="text", style={"width": "100%"}, value=""),
                    ],
                    style={"marginBottom": "8px"},
                ),
                html.Div(
                    [
                        html.Label("Pinyin (if applicable)"),
                        dcc.Input(id="field-pinyin", type="text", style={"width": "100%"}, value=""),
                    ],
                    style={"marginBottom": "16px"},
                ),

                html.Details([
                    html.Summary("Sentences - Basic"),
                    html.Label("Sentence"),
                    dcc.Textarea(id="basic-sentence", style={"width": "100%", "height": 60}, value=""),
                    html.Label("Translation"),
                    dcc.Textarea(id="basic-translation", style={"width": "100%", "height": 60}, value=""),
                    html.Label("Pinyin (if applicable)"),
                    dcc.Textarea(id="basic-pinyin", style={"width": "100%", "height": 40}, value=""),
                ], open=False, style={"marginBottom": "8px"}),

                html.Details([
                    html.Summary("Sentences - Intermediate"),
                    html.Label("Sentence"),
                    dcc.Textarea(id="intermediate-sentence", style={"width": "100%", "height": 60}, value=""),
                    html.Label("Translation"),
                    dcc.Textarea(id="intermediate-translation", style={"width": "100%", "height": 60}, value=""),
                    html.Label("Pinyin (if applicable)"),
                    dcc.Textarea(id="intermediate-pinyin", style={"width": "100%", "height": 40}, value=""),
                ], open=False, style={"marginBottom": "8px"}),

                html.Details([
                    html.Summary("Sentences - Advanced"),
                    html.Label("Sentence"),
                    dcc.Textarea(id="advanced-sentence", style={"width": "100%", "height": 60}, value=""),
                    html.Label("Translation"),
                    dcc.Textarea(id="advanced-translation", style={"width": "100%", "height": 60}, value=""),
                    html.Label("Pinyin (if applicable)"),
                    dcc.Textarea(id="advanced-pinyin", style={"width": "100%", "height": 40}, value=""),
                ], open=False, style={"marginBottom": "16px"}),

                html.Div(
                    [
                        html.Button("Save Changes", id="save-button", n_clicks=0, style={"marginRight": "8px"}),
                        html.Button("Export JSON", id="export-button", n_clicks=0),
                        html.Span(id="save-status", style={"marginLeft": "12px", "color": "green"}),
                    ]
                ),
            ],
            style={"maxWidth": "900px"},
        )],
    
                 span=6),
        ],
        gutter="xl",
    )

        
        
    
    ],
    style={"padding": "16px", "fontFamily": "Arial, sans-serif"},
))


@app.callback(
    Output("words-grid", "rowData"),
    Input("update-trigger", "data"),
    State("grid-rows-store", "data"),
)
def refresh_grid_rows(trigger, rows):
    if rows is None:
        return []
    return rows


@app.callback(
    [
        Output("selected-meta", "children"),
        Output("field-word", "value"),
        Output("field-translation", "value"),
        Output("field-pinyin", "value"),
        Output("basic-sentence", "value"),
        Output("basic-translation", "value"),
        Output("basic-pinyin", "value"),
        Output("intermediate-sentence", "value"),
        Output("intermediate-translation", "value"),
        Output("intermediate-pinyin", "value"),
        Output("advanced-sentence", "value"),
        Output("advanced-translation", "value"),
        Output("advanced-pinyin", "value"),
    ],
    Input("words-grid", "selectedRows"),
    State("json-store", "data"),
    State("index-store", "data"),
    prevent_initial_call=False,
)
def populate_editor(selected_rows, json_data, id_index):
    if not selected_rows or json_data is None or id_index is None:
        return [
            "Select a row to edit.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]

    try:
        row = selected_rows[0]
        row_id = row["row_id"]
        language, category, _ = id_index[row_id]
        item = get_item_by_row_id(json_data, id_index, row_id)

        sentences = item.get("sentences", {})

        def g(level: str, key: str) -> str:
            return sentences.get(level, {}).get(key, "")

        meta = f"Editing: {item.get('word', '')} — lang={language}, category={category}"

        return [
            meta,
            item.get("word", ""),
            item.get("translation", ""),
            item.get("pinyin", ""),
            g("basic", "sentence"),
            g("basic", "translation"),
            g("basic", "pinyin"),
            g("intermediate", "sentence"),
            g("intermediate", "translation"),
            g("intermediate", "pinyin"),
            g("advanced", "sentence"),
            g("advanced", "translation"),
            g("advanced", "pinyin"),
        ]
    except Exception as e:
        print(f"Error in populate_editor: {e}")
        return [
            "Error loading selected item.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]


@app.callback(
    [
        Output("json-store", "data"),
        Output("grid-rows-store", "data"),
        Output("update-trigger", "data"),
        Output("save-status", "children"),
    ],
    Input("save-button", "n_clicks"),
    State("words-grid", "selectedRows"),
    State("json-store", "data"),
    State("index-store", "data"),
    State("update-trigger", "data"),
    State("field-word", "value"),
    State("field-translation", "value"),
    State("field-pinyin", "value"),
    State("basic-sentence", "value"),
    State("basic-translation", "value"),
    State("basic-pinyin", "value"),
    State("intermediate-sentence", "value"),
    State("intermediate-translation", "value"),
    State("intermediate-pinyin", "value"),
    State("advanced-sentence", "value"),
    State("advanced-translation", "value"),
    State("advanced-pinyin", "value"),
    prevent_initial_call=True,
)
def save_changes(
    n_clicks,
    selected_rows,
    json_data,
    id_index,
    current_trigger,
    word,
    translation,
    pinyin,
    basic_sentence,
    basic_translation,
    basic_pinyin,
    inter_sentence,
    inter_translation,
    inter_pinyin,
    adv_sentence,
    adv_translation,
    adv_pinyin,
):
    if not selected_rows or json_data is None or id_index is None:
        return no_update, no_update, no_update, "No row selected."

    try:
        # Create a deep copy of the data to avoid mutations
        json_data_copy = json.loads(json.dumps(json_data))
        
        row = selected_rows[0]
        row_id = row["row_id"]
        item = get_item_by_row_id(json_data_copy, id_index, row_id)
        
        # Create a new item dict to avoid reference issues
        new_item = dict(item)

        # Update basic fields
        new_item["word"] = word or ""
        new_item["translation"] = translation or ""
        if pinyin is not None:
            if pinyin:
                new_item["pinyin"] = pinyin
            elif "pinyin" in new_item:
                new_item.pop("pinyin", None)

        # Update sentences structure
        sentences = new_item.get("sentences", {})
        
        def set_level(level: str, sentence_val, trans_val, pinyin_val):
            if sentence_val or trans_val or pinyin_val:
                level_obj = {}
                if sentence_val:
                    level_obj["sentence"] = sentence_val
                if trans_val:
                    level_obj["translation"] = trans_val
                if pinyin_val:
                    level_obj["pinyin"] = pinyin_val
                sentences[level] = level_obj
            elif level in sentences:
                # Clear the level if all fields are empty
                del sentences[level]

        set_level("basic", basic_sentence, basic_translation, basic_pinyin)
        set_level("intermediate", inter_sentence, inter_translation, inter_pinyin)
        set_level("advanced", adv_sentence, adv_translation, adv_pinyin)
        
        new_item["sentences"] = sentences

        # Commit back into the JSON structure
        set_item_by_row_id(json_data_copy, id_index, row_id, new_item)

        # Update grid row cache
        new_rows, _ = build_row_index(json_data_copy)

        return json_data_copy, new_rows, (current_trigger or 0) + 1, "Saved."
        
    except Exception as e:
        print(f"Error in save_changes: {e}")
        return no_update, no_update, no_update, f"Error saving: {str(e)}"


@app.callback(
    Output("download-json", "data"),
    Input("export-button", "n_clicks"),
    State("json-store", "data"),
    prevent_initial_call=True,
)
def export_json(n_clicks, data):
    if data is None:
        return no_update
    
    try:
        # Export with pretty printing and non-ASCII preserved
        content = json.dumps(data, ensure_ascii=False, indent=2)
        return dict(content=content, filename="test.json")
    except Exception as e:
        print(f"Error in export_json: {e}")
        return no_update


if __name__ == "__main__":
    app.run(debug=True)