import React, { useState } from 'react';
import "./FilterSelectBox.css";

const FilterSelectBox = ({ selectOption, selectType, selectBoxPadding }) => {
    const [toggleSelectOptions, setToggleSelectOptions] = useState(false);
    const [SelectTextField, setSelectTextField] = useState("Show all");
    const [SelectSVGField, setSelectSVGField] = useState(selectOption[3].content);

    return (
        <div onClick={() => { setToggleSelectOptions(!toggleSelectOptions) }} className="selectBox" style={{ padding: `${selectBoxPadding}` }}>

            <div className="selector">
                <div className="selectField">
                    {
                        selectType === "text" ? SelectTextField : SelectSVGField
                    }
                </div>
                {
                    toggleSelectOptions === true ?
                        <ul className="selectOptions">
                            {
                                selectType === "text" ?
                                    selectOption?.map((option, index) => {
                                        return (
                                            option.type === "text" ?
                                                (<li key={index} onClick={(e) => { setSelectTextField(e.target.innerText) }} className="selectOption">
                                                    {option.content}
                                                </li>)
                                                :
                                                null
                                        )
                                    })
                                    :
                                    selectOption?.map((option, index) => {
                                        return (
                                            option.type === "svg" ?
                                                (<li key={index} onClick={() => { setSelectSVGField(selectOption[index].content) }} className="selectOption">
                                                    {option.content}
                                                </li>)
                                                :
                                                null
                                        )
                                    })
                            }
                        </ul>
                        :
                        null
                }
            </div>

            <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.94167 7.37079L13.9211 1.71079C14.0203 1.61783 14.099 1.50723 14.1528 1.38537C14.2065 1.26351 14.2342 1.1328 14.2342 1.00079C14.2342 0.868781 14.2065 0.738075 14.1528 0.616216C14.099 0.494356 14.0203 0.383755 13.9211 0.290792C13.7228 0.104542 13.4546 -3.21983e-08 13.175 -4.37462e-08C12.8954 -5.52942e-08 12.6272 0.104541 12.4289 0.290792L7.13736 5.24079L1.89874 0.290792C1.70045 0.104541 1.43222 -5.28759e-07 1.15263 -5.40307e-07C0.873038 -5.51855e-07 0.604809 0.104541 0.406522 0.290792C0.306524 0.383407 0.226971 0.493852 0.172471 0.615727C0.117971 0.737602 0.089611 0.868485 0.0890293 1.00079C0.089611 1.1331 0.117971 1.26398 0.172471 1.38586C0.226971 1.50773 0.306524 1.61818 0.406522 1.71079L6.38596 7.37079C6.48506 7.4723 6.60534 7.55331 6.73922 7.60871C6.87309 7.66412 7.01766 7.69272 7.16382 7.69272C7.30997 7.69272 7.45454 7.66412 7.58842 7.60871C7.72229 7.55331 7.84257 7.4723 7.94167 7.37079Z" fill="#768396" />
            </svg>
        </div>
    )
}

export default FilterSelectBox;