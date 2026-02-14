import json
import os

# Read the dictionary file
with open('test.json', 'r', encoding='utf-8') as f:
    data = json.load(f)


lng = ["french","chinese"]
cat = ["house"]


listfile = os.listdir("lngStore/")


a = listfile[0].split("_")
print(a[1][:-5])
for k in listfile:
    with open('lngStore/'+k, 'r', encoding='utf-8') as f:
        words = json.load(f)
        a = k.split("_")
        data[a[0]][a[1][:-5]] = words[a[0]][a[1][:-5]]


with open('test_merge.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)