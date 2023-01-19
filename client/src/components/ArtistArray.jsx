import Card from "./Card.jsx";

    export default function() {

        const events = [
            {
                title: "Taylor Swift",
                text: `This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this veggie burger recipe high in fiber and protein too. There's not much to them, other than that! Just mash everything up together, form into patties, heat and serve!`,
                image: 'https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bceece29b062fe6d758ddfa2400c554c&auto=format&w=1024&q=80',
                dateAdded: 20230119,
                location: "Stockholm",
                date: 20230620,
                totalSeats: 200,
                avaiableSeats: 200,
                isBought: false,
                whistList: false,

            },
            {
                title: "Harry Styles",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230120,
                location: "Uppsala",
                date: 20230621,
                totalSeats: 150,
                avaiableSeats: 150,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kayne West",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230121,
                location: "Borås",
                date: 20230419,
                totalSeats: 205,
                avaiableSeats: 205,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230122,
                location: "Sövde",
                date: 20230301,
                totalSeats: 2005,
                avaiableSeats: 2005,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230122,
                location: "Berlin",
                date: 20231221,
                totalSeats: 250,
                avaiableSeats: 250,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230123,
                location: "Malmö",
                date: 20231119,
                totalSeats: 120,
                avaiableSeats: 120,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230130,
                location: "Kina",
                date: 20230620,
                totalSeats: 125,
                avaiableSeats: 125,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230201,
                location: "Borås",
                date: 20230620,
                totalSeats: 200,
                avaiableSeats: 200,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 20230201,
                location: "Lund",
                date: 20230620,
                totalSeats: 225,
                avaiableSeats: 200,
                isBought: false,
                whistList: false,
            },
            {
                title: "Kimberly Amethyst",
                text: `Mushrooms are surprisingly similar in taste and texture to meat when cooked, and this mushroom veggie burger recipe may just surprise you with how tasty it is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this recipe high in fiber and protein too. `,
                image: 'https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png',
                dateAdded: 2023003,
                location: "Blentarp",
                date: 20230620,
                totalSeats: 300,
                avaiableSeats: 200,
                isBought: false,
                whistList: false,
            }
        ]


        return <div className="card-area-wrapper">

            <div className="card-area">
                {
                    events.map(event => <Card title={event.title} text={event.text} image={event.image}/>)
                }
            </div>
        </div>
    }
