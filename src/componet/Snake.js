import React from 'react'

export default function Snake() {
    const renderBoxes = () => {
        const boxes = [];
        let number = 1;
        for (let row = 0; row < 10; row++) {
            let rowData = [];
            for (let col = 0; col < 10; col++) {
                rowData.push(
                    <div key={number} className='box1' style={{ backgroundColor: (row + col) % 2 == 0 ? 'blue' : 'lavender' }}>
                        {number}
                    </div>
                );
                number++;
            }
            boxes.push(<div key={row} className="row">{rowData}</div>);
        }
        return boxes;
    };
    return (
        <>
            <div className="board">
                {renderBoxes()}
            </div>
        </>
    )
}
