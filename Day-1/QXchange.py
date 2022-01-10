import json
import sys
import urllib.request

if len(sys.argv) != 4:
    print("Usage format: python exchange.py 10 usd inr. This is to covert 10 us dollars to indian rupees")
    sys.exit()

money = int(sys.argv[1])
foreign_curr = sys.argv[2]
base_curr = sys.argv[3]

currencyurl = "http://freecurrencyrates.com/api/action.php?do=cvals&iso=" + foreign_curr + "&f=" + base_curr + "&v=1&s=cbr"
f = urllib.request.urlopen(currencyurl)
obj = json.loads(f.read())
result = f"{money} " + foreign_curr.upper() + " is "
result+="{:,.2f}".format(money/obj[foreign_curr.upper()]) + " " + base_curr.upper()

print(result)
