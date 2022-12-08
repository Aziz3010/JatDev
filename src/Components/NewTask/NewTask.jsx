import React, { useRef } from 'react';
import { Emojis } from "../../Assets/Data/Data";
import "./NewTask.css";

const NewTask = () => {
    const inputRef = useRef();
    const emojisBox = useRef();
    const chooseEmoji = (e) => {
        const emoji = e.target.innerText;
        const inp = inputRef.current;
        inp.value += emoji;
    };
    const hanfleLeftArrow = () => {
        const div = emojisBox.current;
        if (div.scrollLeft > 0) {
            div.scrollLeft -= 30;
        }
    };
    const hanfleRightArrow = () => {
        const div = emojisBox.current;
        const divWidth = div.offsetWidth;
        const scrollWidth = div.scrollWidth;
        const hiddenScrollWidth = scrollWidth - divWidth;
        if (div.scrollLeft <= hiddenScrollWidth) {
            div.scrollLeft += 30;
        }
    };

    return (
        <div className="create_task">
            <h3 className='title'>new task</h3>
            <span>task title</span>
            <form>
                <input ref={inputRef} type="text" placeholder='Create new' />
            </form>
            <div className="emoji_box">
                <div onClick={hanfleLeftArrow} className="arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.321927 8.0542L5.98193 13.7042C6.07489 13.7979 6.18549 13.8723 6.30735 13.9231C6.42921 13.9739 6.55991 14 6.69193 14C6.82394 14 6.95464 13.9739 7.0765 13.9231C7.19836 13.8723 7.30896 13.7979 7.40193 13.7042C7.58818 13.5168 7.69272 13.2634 7.69272 12.9992C7.69272 12.735 7.58818 12.4816 7.40193 12.2942L2.45193 7.2942L7.40193 2.3442C7.58818 2.15684 7.69272 1.90339 7.69272 1.6392C7.69272 1.37502 7.58818 1.12156 7.40193 0.934202C7.30931 0.839714 7.19887 0.764543 7.07699 0.713047C6.95512 0.66155 6.82423 0.634752 6.69193 0.634203C6.55962 0.634752 6.42874 0.66155 6.30686 0.713047C6.18499 0.764543 6.07454 0.839714 5.98193 0.934202L0.321927 6.5842C0.220422 6.67784 0.139414 6.79149 0.084006 6.91799C0.0285984 7.04449 -6.07959e-06 7.1811 -6.09167e-06 7.3192C-6.10374e-06 7.4573 0.0285984 7.59391 0.0840059 7.72041C0.139413 7.84691 0.220422 7.96056 0.321927 8.0542Z" fill="#5051F9" />
                    </svg>
                </div>
                <div ref={emojisBox} className="emojis">
                    <div className="emoji">
                        {
                            Emojis.map((emoji, index) => (<span onClick={(e) => { chooseEmoji(e) }} key={index}>{String.fromCodePoint(emoji)}</span>))
                        }
                    </div>
                </div>
                <div onClick={hanfleRightArrow} className="arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.37079 5.9458L1.71079 0.295798C1.61783 0.20207 1.50723 0.127676 1.38537 0.0769072C1.26351 0.0261385 1.1328 0 1.00079 0C0.868781 0 0.738075 0.0261385 0.616216 0.0769072C0.494356 0.127676 0.383755 0.20207 0.290792 0.295798C0.104542 0.483161 0 0.736612 0 1.0008C0 1.26498 0.104542 1.51844 0.290792 1.7058L5.24079 6.7058L0.290792 11.6558C0.104542 11.8432 0 12.0966 0 12.3608C0 12.625 0.104542 12.8784 0.290792 13.0658C0.383407 13.1603 0.493852 13.2355 0.615727 13.287C0.737603 13.3384 0.868485 13.3652 1.00079 13.3658C1.1331 13.3652 1.26398 13.3384 1.38586 13.287C1.50773 13.2355 1.61818 13.1603 1.71079 13.0658L7.37079 7.4158C7.4723 7.32216 7.55331 7.2085 7.60871 7.08201C7.66412 6.95551 7.69273 6.8189 7.69273 6.6808C7.69273 6.5427 7.66412 6.40609 7.60871 6.27959C7.55331 6.15309 7.4723 6.03944 7.37079 5.9458Z" fill="#5051F9" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NewTask;