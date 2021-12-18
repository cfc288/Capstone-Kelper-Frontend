import React from 'react';


function About(props){
    //showMain={showMain}
    //showAbout={showAbout}
    //showInbox={showInbox}
    // activeUser={activeUser} 
    // isLoggedIn={isLoggedIn}
    // showMain={showMain}
    // showAbout={showAbout}
    // showInbox={showInbox}
    // openInbox={openInbox}
    // openAbout={openAbout}
    // openMain={openMain}
    console.log('props.showMain in About',props.showMain)
    console.log('props.showAbout in About',props.showAbout)



    return(
        <>
        <div className='aboutOuterMostDiv'>
            <div className='aboutSecondDiv'>
           
                <div className='aboutHeaderDiv'>
                    <header>
                        <h1>About Kelper</h1>
                    </header>
                </div>



                <div className='mostInnerDiv'>
                    <p> 
                        Kelper is a platform where companies can come together to analyze when to cut loose a client. In order to grow businesses you must cater to the clients actually bringing in revenue and supporting your business. 
                        <br/>
                        <br/>
                        <br/>
                    </p>
                    <br/>

                    
                    <h3>   Research/sources: </h3>
                        <p>"...not every client is a good one. The emotional, physical, and mental drain caused by a bad client relationship can keep you from enjoying your job and negatively impact the work you do for other clients. At times, the best way to grow your business is to let go of those clients who are holding you back.</p>
                        <p> How do you know when it’s time to move on? Here are six warning signs for clients who bring more trouble than they are worth: " </p>
                        <a href="https://www.forbes.com/sites/allbusiness/2014/05/06/6-reasons-to-fire-a-client/?sh=70888eefc512">
                            Forbes - "6 Reasons to Fire a Client"
                        </a>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <p> "...business leaders more than ever need to maniacally focus on the few customers that matter most to them — and spend much less time on the rest. The customer may always be right, but not every customer is right for you." </p>
                        <a href="https://hbr.org/2011/08/its-time-to-fire-some-of-your.html" > It’s Time to Fire Some of Your Customers </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <p> "... whether you’re working with a business-to-business multimillion dollar client or a business-to-consumer $10 customer. The customer is not always right and in some cases should not be the customer at all. It’s time to end the fear of customers’ public feedback and to start managing relationships with abusive customers in a disciplined way." </p>
                        <a href="https://hbr.org/2015/02/when-and-why-to-part-ways-with-a-customer">
                            "When and why to part ways with a customer."
                        </a>

                    <br/>
                    <br/>
                    <br/>
                        <p> "Employee turnover is a major business concern that starts with recruitment. The goal is to hire great employees who will perform well and stay at your company for years to come, but employers can’t neglect their role in keeping team members engaged. Failing to do so results in extremely costly turnover.</p>

                       <p> When it comes to turnover, most people are hyper-focused on the dollar signs tied to employee separations. However, it’s the consequences that fall outside of profit margins that raise the most red flags. Read on to learn the true cost of turnover." </p>
                        <a href="https://builtin.com/recruiting/cost-of-turnover">
                        Cost of turnover</a>
                    <br/>
                    <br/>
                    <br/>
                        <p> "The reality is that regardless of the size of your business, employee turnover is a major concern. Whether it’s because of cutbacks or employee dissatisfaction, if it becomes a frequent occurrence, it can have serious implications for your business." </p>
                        <a href="https://www.forbes.com/sites/johnhall/2019/05/09/the-cost-of-turnover-can-kill-your-business-and-make-things-less-fun/?sh=7abbe4457943">
                        Cost of turnover by forbes</a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Using the Pareto principle for customer analysis:</h3>
                    <br/>
                    <br/>
                        <p> "The Pareto principle, generally known as the 80–20 rule, states that, for many events, roughly 80 per cent of the effects come from 20 per cent of the causes. Applying the principle in business analysis can prove to be a very effective business tool, and one of its many areas of application is in that of sales." </p>
                        <a href="https://customerthink.com/pareto_s_principle_a_useful_tool_for_customer_analysis/"> Pareto’s principle – a useful tool for customer analysis? </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <p> "The Pareto Principle, or “80/20 Rule” as it is frequently called today, is an incredible tool for growing your business. For instance, if you can figure out which 20% of your time produces 80% of your business’ results, you can spend more time on those activities and less time on others. Likewise, by identifying the characteristics of the top 20% of your customers (who represent 80% of your sales), you can find more customers like them and dramatically grow your sales and profits." </p>
                        <a href="https://www.forbes.com/sites/davelavinsky/2014/01/20/pareto-principle-how-to-use-it-to-dramatically-grow-your-business/?sh=2e3ae3a3901d"> Forbes - How to use the Pareto Principle to grow your business</a>


                </div>
            </div>
        </div>
        </>
    )
}

export default About