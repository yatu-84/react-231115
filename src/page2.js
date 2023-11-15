import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';

class page2 extends React.Component {   //page2クラスにReact.Componentを継承する

    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                this is page2(ﾟ∀ﾟ)
                <br/>
                <Link to={`/react-231115`}>Go To page1</Link>
            </div>
        );
    }
}

export default page2;                   //page2を出力する為に必要