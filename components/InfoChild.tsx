
import { InfoSectionWrapper } from "./styled/InfoSection.styled";

function InfoChild({children, id}:{children: React.ReactNode, id: string}) {
    return(
        <InfoSectionWrapper id={id}>
            {children}
        </InfoSectionWrapper>
    )
}

export default InfoChild;
