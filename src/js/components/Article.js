import React from "react";

export default class Article extends React.Component {

  render() {
     const { complete, edit, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }
    const { title } = this.props;
    const colStyle={
      marginTop:"5px",
    }
   let userMessage;
    if ([title]=="Meat") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="Beaf"
            type="checkbox"/> Beaf

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="Chicken"
            type="checkbox"/>
      Chicken
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="Fish"
            type="checkbox"/>
Fish
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 
   else if ([title]=="Breads") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="sandwich"
            type="checkbox"/> Sandwich

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="Fresh"
            type="checkbox"/>
      Fresh Loaf
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="bagels"
            type="checkbox"/>
Bagels
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="mffins"
            type="checkbox"/>
Muffins
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="tortllas"
            type="checkbox"/>
Tortillas
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 

  else if ([title]=="Beverages") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="water"
            type="checkbox"/> Water

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="juice"
            type="checkbox"/>
      Juice
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="soda"
            type="checkbox"/>
Soda
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="coffee"
            type="checkbox"/>
Coffee
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="tea"
            type="checkbox"/>
Tea
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 

  else if ([title]=="Canned Goods") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="bean"
            type="checkbox"/> Beans

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="fruit"
            type="checkbox"/>
      Fruit
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="Soup"
            type="checkbox"/>
Soup
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="tomato"
            type="checkbox"/>
Muffins
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="tuna"
            type="checkbox"/>
Tuna Fish
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="vegetable"
            type="checkbox"/>
Vegetables
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 

    else if ([title]=="Frozen Foods") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="meal"
            type="checkbox"/>
Meals
        </label>
        <br/>
        <label>
         
          <input
            name="pizza"
            type="checkbox"/>
 Pizza
        </label>
        <br/>
         <label>
          
          <input
            name="potatoe"
            type="checkbox"/>
Potatoes
        </label>

        <br/>
         <label>
          
          <input
            name="vegetables"
            type="checkbox"/>
Vegetables
        </label>
        <br/>
         <label>
          
          <input
            name="waffles"
            type="checkbox"/>
Waffles
        </label>
        <br/>
         <label>
          
          <input
            name="ice"
            type="checkbox"/>
Ice Cream
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }


   else if ([title]=="Sauces & Oil") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="bbq"
            type="checkbox"/>
BBQ Sauce
        </label>
        <br/>
        <label>
         
          <input
            name="oil"
            type="checkbox"/>
 Oil
        </label>
        <br/>
         <label>
          
          <input
            name="vinegar"
            type="checkbox"/>
Vinegar
        </label>

        <br/>
         <label>
          
          <input
            name="dressing"
            type="checkbox"/>
Salad Dressing
        </label>
        <br/>
         <label>
          
          <input
            name="soy"
            type="checkbox"/>
Soy Sauce
        </label>
         <br/>
         <label>
          
          <input
            name="maple"
            type="checkbox"/>
Maple Syrup
        </label>
         <br/>
         <label>
          
          <input
            name="spaghetti"
            type="checkbox"/>
Spaghetti Sauce
        </label>
        <br/>
         <label>
          
          <input
            name="ice"
            type="checkbox"/>
Ice Cream
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }

else if ([title]=="Toileteries") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="soap"
            type="checkbox"/>
Soap
        </label>
        <br/>
        <label>
         
          <input
            name="shampoo"
            type="checkbox"/>
 Shampoo
        </label>
        <br/>
         <label>
          
          <input
            name="conditioner"
            type="checkbox"/>
Conditioner
        </label>

        <br/>
         <label>
          
          <input
            name="razor"
            type="checkbox"/>
Razors
        </label>
        <br/>
         <label>
          
          <input
            name="shave"
            type="checkbox"/>
Shaving Cream
        </label>
         <br/>
         <label>
          
          <input
            name="deodorant"
            type="checkbox"/>
Deodorant
        </label>
         <br/>
         <label>
          
          <input
            name="lotion"
            type="checkbox"/>
Lotion
        </label>
        <br/>
         <label>
          
          <input
            name="floss"
            type="checkbox"/>
Floss
        </label>
         <br/>
         <label>
          
          <input
            name="tooth"
            type="checkbox"/>
Toothpaste
        </label>
         <br/>
         <label>
          
          <input
            name="pain"
            type="checkbox"/>
Pain Reliever
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }


    else if ([title]=="Pet Items") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="dog"
            type="checkbox"/>
Dog Foods
        </label>
        <br/>
        <label>
         
          <input
            name="cat"
            type="checkbox"/>
 Cat Foods
        </label>
        <br/>
         <label>
          
          <input
            name="catlitter"
            type="checkbox"/>
Cat Littlers
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }

else if ([title]=="Pasta & Rice") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="spaghetti"
            type="checkbox"/>
Spaghetti
        </label>
        <br/>
        <label>
         
          <input
            name="rice"
            type="checkbox"/>
 Rice
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }

else if ([title]=="Deli") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="cold"
            type="checkbox"/>
Cold Cuts
        </label>
        <br/>
        <label>
         
          <input
            name="cheese"
            type="checkbox"/>
 Cheese
        </label>
        <br/>
        <label>
         
          <input
            name="salad"
            type="checkbox"/>
 Salad
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }

 else if ([title]=="Fruits") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="banana"
            type="checkbox"/>
Banana
        </label>
        <br/>
        <label>
         
          <input
            name="apple"
            type="checkbox"/>
 Apple
        </label>
        <br/>
         <label>
          
          <input
            name="berry"
            type="checkbox"/>
Strawberry
        </label>
        <br/>
         <label>
          
          <input
            name="orange"
            type="checkbox"/>
Orange
        </label>
        <br/>
         <label>
          
          <input
            name="grape"
            type="checkbox"/>
Grape
        </label>
        <br/>

         <label>
          
          <input
            name="berry"
            type="checkbox"/>
Watermelon
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }

    else if ([title]=="Spices") {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label>
          
          <input
            name="salt"
            type="checkbox"/>
Salt
        </label>
        <br/>
        <label>
         
          <input
            name="pepper"
            type="checkbox"/>
 Pepper
        </label>
        <br/>
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }


    else if ([title]=="Dairy") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="milk"
            type="checkbox"/> Milk

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="butter"
            type="checkbox"/>
      Butter
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="eggs"
            type="checkbox"/>
Eggs
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="cheese"
            type="checkbox"/>
Cheese
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="yogurt"
            type="checkbox"/>
Yogurt
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="cream"
            type="checkbox"/>
Cream Cheese
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 


 else if ([title]=="HouseHold") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="garbage"
            type="checkbox"/> Garbage Bags

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="laundry"
            type="checkbox"/>
      Laundry Softner
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="hand"
            type="checkbox"/>
Hand Soup
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="bleach"
            type="checkbox"/>
Bleach
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="light"
            type="checkbox"/>
Light Bulbs
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="glass"
            type="checkbox"/>
Glass Cleaner
        </label>
        <br/>
         <label class="form-check-label">
         
          <input class="form-check-input"
            name="sponge"
            type="checkbox"/>Sponges

        </label>
        <br/>
         <label class="form-check-label">
         
          <input class="form-check-input"
            name="soup"
            type="checkbox"/>Dishwashing Soup

        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 


 else if ([title]=="Snacks") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="pretzels"
            type="checkbox"/> Pretzels

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="cookie"
            type="checkbox"/>
      Cookies
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="chips"
            type="checkbox"/>
Chips
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="dip"
            type="checkbox"/>
Dip/Salsa
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="cracker"
            type="checkbox"/>
Crackers
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="candy"
            type="checkbox"/>
Candy
        </label>
          <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="nuts"
            type="checkbox"/>
Nuts
        </label>
          <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="popcorn"
            type="checkbox"/>
Popcorn
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="bar"
            type="checkbox"/>
Snack Bars
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 



    else if ([title]=="Vegetables") {
      userMessage = (
        
        <form class="list">
         <div class="form-check mb-2 mr-sm-2 mb-sm-0">
        <label class="form-check-label">
         
          <input class="form-check-input"
            name="broccoli"
            type="checkbox"/> Broccoli

        </label>
        <br/>
        <label class="form-check-label">
    
          <input class="form-check-input"
            name="carrots"
            type="checkbox"/>
      Carrots
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="cucumber"
            type="checkbox"/>
Cucumbers
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="garlic"
            type="checkbox"/>
Garlic
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="lettus"
            type="checkbox"/>
Lettus
        </label>
        <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="mushrroom"
            type="checkbox"/>
Mushroom
        </label>
          <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="onion"
            type="checkbox"/>
Onions
        </label>
          <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="pepper"
            type="checkbox"/>
Peppers
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="potatoe"
            type="checkbox"/>
Potatoes
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="tomatoe"
            type="checkbox"/>
Tomatoes
        </label>
         <br/>
         <label class="form-check-label">
          
          <input class="form-check-input"
            name="zucchini"
            type="checkbox"/>
Zucchini
        </label>
        <br/>
             <label>
          
          <input
            name="other"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
       
      )
    } 


    else {
      userMessage = (
        <form class="list">
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
             <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        <br/>

          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
 <br/>

          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
         <br/>

          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>

        <br/>
          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>

         <br/>
          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
         <br/>
          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
         <br/>
          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
         <br/>
          <label>
          
          <input
            name="otherfruits"
            type="checkbox"/>
Others<input type="text"/>
        </label>
        </div>
      </form>
      )
    }
     



    return (
      <div class="col-md-4" style={colStyle}>
        <h2>{title}</h2>
        <h6>{userMessage}</h6>
         <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
  <form>
</form>
  { /*<a class="btn btn-default" href="#">Save</a> */}
      </div>
    );
  }
}
