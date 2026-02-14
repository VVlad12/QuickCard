import json

# Read the dictionary file
with open('test.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract all translations with their categories
translations_list = []

# Iterate through each language
for language, categories in data.items():
    # Iterate through each category in the language
    for category_name, words in categories.items():
        # Iterate through each word in the category
        for word_obj in words:
            if 'translation' in word_obj and 'category' in word_obj:
                translations_list.append({
                    'language': language,
                    'word': word_obj.get('word', ''),
                    'translation': word_obj['translation'],
                    'category': word_obj['category']
                })

# Write to output file
with open('translations_list.txt', 'w', encoding='utf-8') as f:
    f.write("All Translations with Categories\n")
    f.write("=" * 80 + "\n\n")

    for item in translations_list:
        f.write(f"Language: {item['language']}\n")
        f.write(f"Word: {item['word']}\n")
        f.write(f"Translation: {item['translation']}\n")
        f.write(f"Category: {item['category']}\n")
        f.write("-" * 80 + "\n")

# Also create a JSON version for structured data
with open('translations_list.json', 'w', encoding='utf-8') as f:
    json.dump(translations_list, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(translations_list)} translations")
print("Output files created:")
print("- translations_list.txt (human-readable format)")
print("- translations_list.json (structured JSON format)")
