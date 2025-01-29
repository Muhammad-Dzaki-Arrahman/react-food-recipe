// components
import PreviousSearch from "../components/PreviousSearch";
import RecipeCard from "../components/RecipeCard";
export default function Recipes() {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
      description:
        "Deliciously pizza and chicken. Perfect for people who loves chicken taste.",
    },
    {
      title: "Pepperoni Feast Pizza",
      image: "img/gallery/img_2.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
      description:
        "Deliciously loaded with pepperoni slices and gooey cheese. Perfect for pizza lovers.",
    },
    {
      title: "BBQ Chicken Pizza",
      image: "img/gallery/img_3.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
      description:
        "Savory barbecue chicken with smoky flavors, topped with fresh onions.",
    },
    {
      title: "Veggie Delight Pizza",
      image: "img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_4.jpg",
      description:
        "A medley of fresh veggies for a wholesome and flavorful experience.",
    },
    {
      title: "Margherita Classic Pizza",
      image: "img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
      description:
        "The simplicity of fresh basil, mozzarella, and tangy tomato sauce.",
    },
    {
      title: "Spicy Sausage Pizza",
      image: "img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
      description:
        "A spicy twist with sausage, jalapeños, and melted mozzarella cheese.",
    },
    {
      title: "Mediterranean Olive Pizza",
      image: "img/gallery/img_7.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
      description:
        "Bursting with olives, feta cheese, and Mediterranean-inspired toppings.",
    },
    {
      title: "Cheese Burst Pizza",
      image: "img/gallery/img_8.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
      description:
        "Overflowing with molten cheese in every bite for a cheesy indulgence.",
    },
    {
      title: "Hawaiian Pineapple Pizza",
      image: "img/gallery/img_9.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
      description:
        "The perfect blend of sweet pineapple and savory ham on a soft crust.",
    },
    {
      title: "Buffalo Chicken Pizza",
      image: "img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_4.jpg",
      description:
        "Tangy buffalo sauce, chicken, and blue cheese create an irresistible flavor.",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <div>
      <PreviousSearch />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
