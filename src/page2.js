import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';
import dummy from "./img/test.jpg"
import './test.css'

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する

    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div className='page2'>
                this is page2(ﾟ∀ﾟ)
                <br/>
                Click on the image to go to the page1
                <br/>
                <Link to={`/react-231115`}>
                    <img className="imgNext" src={dummy} />
                </Link>
                
            </div>
        );
    }
}

export default page2;                   //page2を出力する為に必要