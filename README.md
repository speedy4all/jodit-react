# React Jodit WYSIWYG Editor

[![npm](https://img.shields.io/npm/v/@speedy4all/jodit-react.svg)](https://www.npmjs.com/package/@speedy4all/jodit-react)
[![npm](https://img.shields.io/npm/dm/@speedy4all/jodit-react.svg)](https://www.npmjs.com/package/@speedy4all/jodit-react)
[![npm](https://img.shields.io/npm/l/@speedy4all/jodit-react.svg)](https://www.npmjs.com/package/@speedy4all/jodit-react)

## Fixed images in print preview

- the page now waits for the images to load and only then the print is opened

React wrapper for [Jodit](https://xdsoft.net/jodit/)

> [Jodit React PRO](https://xdsoft.net/jodit/pro/) it is an extended version of Jodit React with the same API, but with a lot more features.

## Installation

```bash
npm install @speedy4all/jodit-react --save
```

## Update editor version
```bash
npm update @speedy4all/jodit-react
```

## Run demo
```bash
npm install --dev
npm run demo
```

and open
```
http://localhost:4000/
```

## Usage

### 1. Require and use Jodit-react component inside your application.

```jsx
import React, {useState, useRef} from 'react';
import JoditEditor from "@speedy4all/jodit-react";

const Example = ({}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

	return (
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        );
}
```


License
-----
This package is available under `MIT` License.
