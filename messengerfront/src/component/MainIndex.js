import React from "react";
import {Link} from "react-router-dom";

function MainIndex(){
    return (
        <div className="circle-main-content">
            <div className="main-bg">

                <div id="fullpage">
                    <div className="section" data-anchor="test1">
                        <img className="home-img" src="/images/bg.png" alt="bg1"/>
                        <img className="home-img2" src="/images/bg2.png" alt="bg2"/>
                        <div className="main-title">
                            <div>
                                <span>효과적인 팀워크, 가벼워진 업무</span>
                                <p>이메일이 필요없는 간편한 소통과 파일 공유, 빠른 피드백 확인까지.
                                    <br/>바라던 기능들을 모두 담아
                                        <br/>업무에 최적화된 커뮤니케이션이 가능해집니다.</p>
                            </div>
                            <div className="main-btn">
                                <div className="main-btn-bg">
                                    <Link to="/member/signup">무료 체험 시작</Link><br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section" data-anchor="test2">
                        <div className="about-title">
                            <span>ABOUT CIRCLE</span>
                            <div className="about-detail">
                                <p>우리는 팀 커뮤니케이션을 위한 새롭고 혁신적인 방법을 제공하고자 합니다.<br/>
                                    그룹중심의 메신저 기반으로 빠른 소통과 간편한 프로젝트 관리가 가능해집니다.<br/>
                                    써클(circle)을 통해 함께 일하는 것이 어떻게 달라질 수 있는지 경험해 보세요.
                                </p>
                            </div>
                        </div>
                        <img className="home-img3" src="/images/bg5.png" alt="bg5"/>
                    </div>
                    <div className="section" data-anchor="test3">
                        <div className="pay-title">
                            <span>요금 안내</span>
                            <p>써클을 함께 사용할 멤버는 몇 명인가요?</p>
                        </div>
                        <div className="pay-info">
                            <div className="pay-box">
                                <div className="pay-one">
                                    <span>1개월권</span>
                                    <div className="pay-line"></div>
                                    <div className="pay-p">
                                        <p>개당</p>
                                        <p className="price">5000</p>
                                        <p className="price-one">￦</p>
                                    </div>
                                </div>
                                <div className="pay-one">
                                    <span>6개월권</span>
                                    <div className="pay-line"></div>
                                    <div className="pay-p">
                                        <p>개당</p>
                                        <p className="price">27000</p>
                                        <p className="price-one">￦</p>
                                    </div>
                                </div>
                                <div className="pay-one pay-last">
                                    <span>1년권</span>
                                    <div className="pay-line"></div>
                                    <div className="pay-p">
                                        <p>개당</p>
                                        <p className="price">48000</p>
                                        <p className="price-one">￦</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MainIndex;