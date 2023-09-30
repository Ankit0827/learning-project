import Card from "./Card/Card"


const cardData=[
    {
        name:"Virat kohli",
        email:"kohli@gmail.com",
        mobile:"876726289287",
        id:1
    },

    {
        name:"Rohit Sharma",
        email:"rohit@gmail.com",
        mobile:"876726289287",
        id:2
    }, {
        name:"Virat kohli",
        email:"kohli@gmail.com",
        mobile:"876726289287",
        id:3
    }, {
        name:"Rohit Sharma",
        email:"rohit@gmail.com",
        mobile:"876726289287",
        id:4
    }, {
        name:"Virat kohli",
        email:"kohli@gmail.com",
        mobile:"876726289287",
        id:5
    },
    {
        name:"Rohit Sharma",
        email:"rohit@gmail.com",
        mobile:"876726289287",
        id:6
    },
]

const Home=()=>{
    return(
        <div className="home-div">
            <div className="heading">
                <h1>Home</h1>
            </div>
           <Card data={cardData}/>
        </div>
    )
}

export default Home