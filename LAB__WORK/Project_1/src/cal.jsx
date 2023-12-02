import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'react-date-range/dist/styles.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';

function Cal() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    console.log(state);

    const formatStartDate = state[0]?.startDate?.toDateString() || '';
    const formatEndDate = state[0]?.endDate?.toDateString() || '';

    return (
        <Dropdown className='col-12'>
            <Dropdown.Toggle variant="" id="dropdown-basic" className='col-12'>
                {formatStartDate} - {formatEndDate}
            </Dropdown.Toggle>

            <Dropdown.Menu className='col-12'>
                <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {
                        // Ensure that item.selection is not null
                        if (item.selection) {
                            setState([item.selection]);
                        }
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                />
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Cal;
