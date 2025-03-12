switch = "(x === 'paper' && c === 'scissors' || x === 'rock' && c === 'paper' || x === 'scissors' && c === 'rock')"
new = ''
for i in range(len(switch)):
    if switch[i] == 'c' and switch[i+1] == ' ':
        new = new + 'x'
    elif switch[i] == 'x' and switch[i+1] == ' ':
        new = new + 'c'
    else:
        new = new + switch[i]
print(new)