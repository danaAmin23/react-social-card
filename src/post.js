import React from 'react';
import '../src/post.css';

const Post = () => {


    return (
        <div>
            <div className="content">
                <div className = "content-img">
                <img src="../logo192.png"   ></img>
                </div>

                <div className ='content-content'>

                    <h3>Learning React? Start Small</h3>
                    <p>

                        Cant Pry Yourself away from th tutorials? The cure is to make little experiment apps
                    </p>
                    <a>dev.to</a>
                </div>
            </div>
        </div>
    )


}


export default Post;