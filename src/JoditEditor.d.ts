import * as React from 'react';
import { IJodit } from '@speedy4all/jodit/types/types';

declare module '@speedy4all/jodit-react' {
	export interface IJoditEditorProps {
		value: string,
		config?: IJodit['options'];
		onChange: (newValue: string) => void;
		onBlur: (newValue: string) => void;
	}
	const JoditEditor: React.ComponentType<IJoditEditorProps>;
	export default JoditEditor;
}
