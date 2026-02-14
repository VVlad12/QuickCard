import sys

def filter_words_by_category(input_file: str, category: str, output_file: str = "target_word.txt"):
    """
    Read words from input file, filter by category, and write to output file.

    Args:
        input_file: Path to the input file with format "category:word"
        category: The category to filter by
        output_file: Path to the output file (default: target_word.txt)
    """
    words = []

    with open(input_file, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue

            # Handle the format from the file: "Category:word"
            if ':' in line:
                # Split only on first colon to handle cases where word might contain colon
                parts = line.split(':', 1)
                if len(parts) == 2:
                    cat = parts[0].strip()
                    word = parts[1].strip()

                    if cat.lower() == category.lower():
                        words.append(word)

    with open(output_file, 'w', encoding='utf-8') as f:
        for word in words:
            f.write(word + '\n')

    print(f"Found {len(words)} words in category '{category}'")
    print(f"Written to {output_file}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python filter_words.py <category> [output_file]")
        print("Example: python filter_words.py House")
        print("Example: python filter_words.py Food my_words.txt")
        sys.exit(1)

    category = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else "target_word.txt"

    filter_words_by_category("words.txt", category, output_file)
