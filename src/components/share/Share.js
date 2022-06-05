import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in your mind Adnan" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOptions">
                        <Label htmlColor='blue' className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOptions">
                        <Room htmlColor='green' className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOptions">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
