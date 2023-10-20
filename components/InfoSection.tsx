import InfoChild from "./InfoChild";

function InfoSection() {
    return(
        <>
            <InfoChild id="how-it-works">
                <h2>How it works</h2>
                <li>We find the 500 top posts from the past year for a subreddit. </li>
                <li>The data is visualized in a heatmap grouped by weekday and hour of the day. </li>
                <li>See immediately when to submit your reddit post.</li>
            </InfoChild>
            <InfoChild id="about">
                <h2>About</h2>
                <p>
                Analyze how other posts performed on interested subreddit by requesting top posts from RedditAPI.
                More features are coming soon.
                </p>
            </InfoChild> 
        </>
    )
}

export default InfoSection;
