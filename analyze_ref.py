import re
from collections import Counter

html = open('ref.html', encoding='utf-8').read()
classes = re.findall(r'class="([^"]*)"', html)
tokens = Counter()
for c in classes:
    tokens.update(c.split())

for t, n in tokens.most_common(80):
    print(n, t)
EOF