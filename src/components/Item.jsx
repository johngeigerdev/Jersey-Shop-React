
function Item ({item}) {
    return (
        <>
            
                    <div className={`product ${item.isInBag ? 'selected' : ''}`}>
                        <div className="photo">
                            <img src={"./img/" + item.photo} />
                        </div>
                            <div className="description">
                                <span className="name">{item.name}</span>
                                <span className="price">${item.price}</span>
                            <div className="quantity-area">
                                { 
                                    item.isInBag &&
                                        <div>
                                            <button>-</button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button>+</button>  
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Item