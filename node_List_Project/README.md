## This project is replica of ls command.

## Create package.json file with "bin" section

terminal

```
npm init -y
```

### adding bin in package

package.json

```
"bin": {
    "nls": "index.js"
  }
```

### change index.js file permissions

terminal

```
chmod +x index.js
```

### Add comment to index.js file at the top to allow it to be treated like an executable

index.js

```
#!/usr/bin/env node
```

### Link our project

terminal

```
npm link

or

sudo npm link
```
