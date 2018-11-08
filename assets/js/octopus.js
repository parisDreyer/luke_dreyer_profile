const octoChild = document.createElement("div");
octoChild.innerHTML = `<div class="container">
    <div id="egg">
        <div class="leftEyeContain">
            <div class="topLid"></div>
            <div class="eye">
                <div class="white"></div>
            </div>
            <div class="bottomLid"></div>
        </div>
        <div class="rightEyeContain">
            <div class="topLid"></div>
            <div class="eye">
                <div class="white"></div>
            </div>
            <div class="bottomLid"></div>
        </div>

        <div class="mouth"></div>


    </div>

    <div class="tentacle first">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle second">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle third">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle fourth">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle2 fifth">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle2 sixth">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle2 seventh">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tentacle2 eigth">
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bubble1 bubble"></div>
    <div class="bubble2 bubble"></div>
    <div class="bubble3 bubble"></div>
    <div class="bubble4 bubble"></div>
    <div class="bubble5 bubble"></div>
    <div class="bubble6 bubble"></div>


</div>`;


const octoLoop = () => window.setTimeout(() => {
    
    
    document.body.appendChild(octoChild);

    window.setTimeout(()=>{
        document.body.removeChild(octoChild);
    }, 6000);

    window.setTimeout(() => {
        octoLoop();
    }, (6000 + Math.random() * 10))
}, (3000 + Math.random() * 10));

octoLoop();