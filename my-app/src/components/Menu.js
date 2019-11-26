import React from 'react';

class Menu extends React.Component {
    
      makeid(length) {
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    render() {

      
    console.log(this.props.items)

    const menu = this.props.items.map(e => < a key = {
          this.makeid(5)
        }
        href = {
          e.url
        }
        target = {
          e.blank ? "_blank" : "_self"
        } > {
          e.text
        } < /a>)

        return (
          <div>
          {
            menu
          }
          </div>
        );
    }
}

export default Menu;