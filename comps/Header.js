
import Link from 'next/link'
 

const Header = (props) => (
    <div style={{flex:0, flexDirection:'row', alignItems:'center' , justifyItems:'flex-end',backgroundColor:'pink'}}>
        <Link href="/About">
            <button>Go to About Page</button>
        </Link>
        <Link href="/">
            <button>Go to Index Page</button>
        </Link>
        {/* {props.childern} */}
        {/* {alert(props)} */}
    </div>
)

export default Header