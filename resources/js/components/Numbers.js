import Message from './Message';

export default function Numbers(props) {
    let isMultipleOf3 = props.multipleOf3;
    let isMultipleOf5 = props.multipleOf5;
    let Content;

    if(isMultipleOf3 && isMultipleOf5) {
        Content = 
                    <>
                        <Message text={'Coating Damage!'}/>
                        <Message text={'Lightning Strike!'}/>
                    </>
    } else if(isMultipleOf3) {
        Content = 
                    <>
                        <Message text={'Coating Damage!'}/>
                    </>
    } else if(isMultipleOf5) {
        Content = 
                    <>
                        <Message text={'Lightning Strike!'}/>
                    </>
    } else {
        Content = props.number
    }
    
    return (
            <div className="numbers">
                {Content}
            </div>
    )
}