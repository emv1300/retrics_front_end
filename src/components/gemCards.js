import React from "react";
import DiamondCard from './cards/diamondCard';
import EmeraldCard from './cards/emeraldCard';
import RubyCard from './cards/rubyCard';

function GemCards() {

    return (
                
                <div className="gemCards">
                    <div className="dSpace">
                        <DiamondCard/>
                    </div>
                    <div className="dSpace">
                        <EmeraldCard/>  
                    </div>
                    <div className="dSpace">
                        <RubyCard/>  
                    </div>
                </div>
            
    )
}

export default GemCards;