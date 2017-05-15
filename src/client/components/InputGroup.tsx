import * as React from 'react';

export interface IInputGroupProps extends React.Props<{}> {
    addOnBefore: string;
    addOnAfter: string;
}

const InputGroup = ({ addOnBefore, addOnAfter, children }: IInputGroupProps) => {
    const addOnBeforeComponent = addOnBefore ? <span className="input-group-addon">{addOnBefore}</span> : null;
    const addOnAfterComponent = addOnAfter ? <span className="input-group-addon">{addOnAfter}</span> : null;

    return (
        <div className="input-group">
            {addOnBeforeComponent}
            {children}
            {addOnAfterComponent}
        </div>
    );
};

export default InputGroup;
