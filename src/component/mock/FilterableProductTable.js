import React, { Component, Fragment } from "react";
import { productData } from "../productData";
import { Checkbox } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      products: productData
    };
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked,
    });
  }
  render() {
    const {checked,products} = this.state.checked;
    return (
      <Fragment>
        <div className="row" style={{ marginLeft: "15px" }}>
          <input placeholder="Search..." />
        </div>
        <div className="row">
          <div className="col-md-6">
            <Checkbox
              checked={checked}
              label="Chceked"
              onChange={(e) => this.handleChange(e)}
              inputProps={{ "aria-label": "controlled" }}
            />
            <label>Only show products in stock</label>
          </div>
        </div>
    
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={4}>
         <b style={{marginRight: "150px"}}>Name</b><b>Price</b> <br/>
         <b>Sporting Goods</b><br/>
      
         {
           this.state.products.map(p => ( 
                p.category === "Sporting Goods" && 
              <>
                 <div className="row">
                <label style={{marginRight: "150px",marginLeft:"30px"}}>{p.name}</label>
                <label style= {{marginLeft:"30px"}} >{p.price}</label>
                </div>
                 </> 
            ))
         }
           
         </Grid>
         </Grid>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={4}>
         <b>Electronics</b><br/>
       
         {
           this.state.products.map(p => ( 
                p.category === "Electronics" &&
                <>
                  <div className="row">
                 <label style={{marginRight: "150px",marginLeft:"30px"}}>{p.name}</label>
                <label style= {{marginLeft:"30px"}}>{p.price}</label>
                </div>
                </>
            ))
         }
       
         </Grid>
         </Grid>
      </Fragment>
    );
  }
}

export default FilterableProductTable;
