import './SectionHeader.css';

const SectionHeader = (props) => {


    return (
        <div className="sectionContainer">
            <h2 className="heading">{props.heading}</h2>
            <hr className="horizental" />
        </div>
    )
}

export default SectionHeader;