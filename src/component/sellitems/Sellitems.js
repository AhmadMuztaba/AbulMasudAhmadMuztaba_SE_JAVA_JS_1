import React, { Component } from 'react';

class Sellitems extends Component {
    state = { itemname: '', itemBrand: '', price: '', profitpercent: '', image: '', itemDetails: '' }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.itemname.length<=0 || this.state.itemBrand.length<=0 ||this.state.profitpercent.length<=0 || this.state.price.length<=0){
            alert('fill up item name ,price ,brand and profit percent');
        }else{
            console.log(this.state);
        }
    }
    render() {
        return (
            <>
                <section className="itemsell">
                    <h2 className="heading--secondary backgroung-color-blue">
                        item details
                    </h2>
                    <div className="itemsell__form">
                        <form className="itemsell__form--form" encType="multipart/form-data" onSubmit={(e) => {
                            this.handleSubmit(e);
                        }}>
                            <div className="itemsell__form--form__itemname">
                                <label className="itemsell__form--form__itemname--label" for="itemname" ><b>item name:</b></label>
                                <input className="itemsell__form--form__itemname--input" type="text" name="itemName" value={this.state.itemname} name="itemName" placeholder="" onChange={(e) => {
                                    this.setState({ itemname: e.target.value });
                                }} />
                            </div>
                            <div className="itemsell__form--form__itemAuthor">
                                <label className="itemsell__form--form__itemAuthor--label" for="itemBrand"><b>item Brand</b></label>
                                <input className="itemsell__form--form__itemAuthor--input" type="text" name="itemBrand" value={this.state.itemBrand} name="itemBrand" placeholder="" onChange={(e) => {
                                    this.setState({ itemBrand: e.target.value })
                                }} /><br />
                            </div>
                            <div className="itemsell__form--form__price">
                                <label className="itemsell__form--form__price--label" for="price"><b>price</b></label>
                                <input className="itemsell__form--form__price--input" type="text" name="price" value={this.state.price} name="price" placeholder="" onChange={(e) => {
                                    this.setState({ price: e.target.value })
                                }} /><br />
                            </div>
                            <div className="itemsell__form--form__price">
                                <label className="itemsell__form--form__price--label" for="profitpercent"><b>Profit Percentage</b></label>
                                <input className="itemsell__form--form__price--input" type="text" name="profitpercent" value={this.state.profitpercent} name="price" placeholder="" onChange={(e) => {
                                    this.setState({ profitpercent: e.target.value })
                                }} /><br />
                            </div>
                            <div className="itemsell__form--form__imgUpload">
                                <label className="itemsell__form--form__imgUpload--label" for="imgUpload"><b>image upload</b></label>
                                <input className="itemsell__form--form__imgUpload--input" type="file" name="imgUpload" onChange={(e) => {
                                    this.setState({ image: e.target.files[0] });
                                }} /><br />
                            </div>
                            <div className="itemsell__form--form__itemDetails">
                                <label className="itemsell__form--form__itemDetails--label" for="itemDetails"><b>About item</b></label><br />
                                <textarea className="itemsell__form--form__itemDetails--textarea" value={this.props.itemDetails} name="itemDetals" placeholder="say something about the item" onChange={(e) => {
                                    this.setState({ itemDetails: e.target.value });
                                }}></textarea>
                            </div>
                            <div className="itemsell__form--form__button margin-bottom--big margin-top--medium">
                                <button type="submit" className="btn btn-lg btn-warning form-button margin-bottom--big">submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        );
    }
}
export default Sellitems;