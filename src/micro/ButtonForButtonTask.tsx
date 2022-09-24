import React from 'react';
import ButtonTask from "./ButtonTask";


export const ButtonForButtonTask = () => {

    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hallo. I'm VASIA")
    }

    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hallo. I'm YVAN")
    }*/

    /* const onClickHandler = (name: string) => {
         console.log(name)
     }*/

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('Im stupped button')
    }

    return (
        <div className="App">
            {/* <button onClick={(event) => {console.log('Hallo')}}>MyYouTubeChanel-1</button>*/}
            {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('VASJA')}>MyYouTubeChanel-1
            </button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('YVAN')}>MyYouTubeChanel-2
            </button>*/}
            {/* <button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>*/}
            <ButtonTask name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasja', 21)}/>
            <ButtonTask name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
            <ButtonTask name={'Im stupped button'} callBack={Button3Foo}/>
        </div>
    )
}