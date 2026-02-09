import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  /* box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06); */
`;

const Badge = styled.div`
    height: max-content;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 8px;
`;

const Meta = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  color: #555;
  font-size: 14px;
`;

const Address = styled.p`
  color: #666;
  margin-top: 10px;
  line-height: 1.6;
`;

const HostCard = styled.div`
  background: #f8f9fa;
  border-radius: 14px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
`;

const HostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.div`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6f42c1, #4c6ef5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
`;

const ResponseTime = styled.span`
  color: #198754;
  font-weight: 600;
  font-size: 14px;
`;

const SectionTitle = styled.h5`
  margin-top: 36px;
  font-weight: 700;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.8;
  margin-top: 12px;
`;

const SpaceInfo = (props) => {
    console.log(props);
    return (
        <Wrapper>
            {/* Title + Badge */}
            <TitleRow>
                <div>
                    <Title>{props.space.title}</Title>

                    <Meta>
                        <span>📍 0.3 mi away</span>
                        <span>⭐ 4.9 (247 reviews)</span>
                    </Meta>

                    <Address>
                        {props.space.location_address}
                    </Address>
                </div>

                <Badge className="bg-primary text-white px-2" pill>
                    Covered Garage
                </Badge>
            </TitleRow>

            {/* Host Info */}
            <HostCard>
                <HostInfo>
                    <Avatar>{props.owner?.name.split(" ")
                        ?.map(word => word[0])
                        ?.join("")
                        ?.slice(0, 2)
                        ?.toUpperCase() || ""}</Avatar>
                    <div>
                        <div className="fw-semibold">Hosted by</div>
                        <div className="text-muted">{props.owner?.name}</div>
                    </div>
                </HostInfo>

                <div>
                    <div className="text-muted small">Response time</div>
                    <ResponseTime>&lt; 5 minutes</ResponseTime>
                </div>
            </HostCard>

            {/* About */}
            <SectionTitle>About this space</SectionTitle>
            <Description>
                {props.space.description}
            </Description>
        </Wrapper>
    );
};

export default SpaceInfo;
