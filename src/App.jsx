import React from 'react'; // Importeer React uit de 'react' bibliotheek

import './App.css';
import './helper/Helper.js';
import {
    calculateTotalSoldTVs,
    calculateTotalBoughtTVs,
    formatPrice,
    generateScreenSizes,
    notSoldTVs,
    findNh3216SmartTV
} from "./helper/Helper.js";
import { bestSellingTv } from "./constants/inventory.js";
import { ReactComponent as CheckIcon } from './assets/icons8-check.svg';
import { ReactComponent as NoIcon } from './assets/minus-svgrepo-com.svg';

const handleSortClick = (sortType) => {
    console.log(`Klik op de knop: ${sortType}`);
};

function App() {
    console.log(notSoldTVs());
    console.log(findNh3216SmartTV());
    return (
        <>
            <div className="outerContainer">
                <div className={"generalContainer"}>
                    <div className={"head"}>
                        <h1>Tech it easy dashboard</h1>
                    </div>
                    <div className="resultContainer">
                        <div className="SoldTvContainer">
                            <div className="titleContainer">
                                <p>sold</p>
                                <p>{calculateTotalSoldTVs()}</p>
                            </div>
                            {/* Plaats hier wat je wilt weergeven in deze container */}
                        </div>
                        <div className="boughtTvContainer">
                            <div className="titleContainer">
                                <p>bought</p>
                                <p>{calculateTotalBoughtTVs()}</p>
                            </div>
                            {/* Plaats hier wat je wilt weergeven in deze container */}
                        </div>
                        <div className="TvsleftContainer">
                            <div className="titleContainer">
                                <p>left</p>
                                <p>{calculateTotalBoughtTVs() - calculateTotalSoldTVs()}</p>
                            </div>
                            {/* Plaats hier wat je wilt weergeven in deze container */}
                        </div>
                    </div>
                </div>
                <div className={["generalContainer", "bestsellingContainer"].join(" ")}>
                    <div className={"fotoContainer"}>
                        <img src={bestSellingTv.sourceImg} alt={bestSellingTv.name} />
                    </div>
                    <div className={"infoContainer"}>
                        <h1>Beste verkochte tv:</h1>
                        <p>{`${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`}</p>
                        <p>{formatPrice(bestSellingTv.price)}</p>
                        <p>{generateScreenSizes(bestSellingTv.availableSizes)}</p>
                    </div>
                    <div>
                        <CheckIcon className="icon" />
                        <span>wifi</span>
                        <NoIcon className="icon" />
                        <span>speech</span>
                        <CheckIcon className="icon" />
                        <span>hdr</span>
                        <CheckIcon className="icon" />
                        <span>bluetooth</span>
                        <NoIcon className="icon" />
                        <span>Ambilight</span>
                    </div>
                </div>
                <p>{notSoldTVs()}</p>
                <p>{findNh3216SmartTV()}</p>
            </div>
        </>
    );
}

export default App;
