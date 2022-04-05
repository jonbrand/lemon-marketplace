import { 
  CollectionCardContainer, 
  CollectionCard, 
  Details, 
  Name, 
  PriceContainer, 
  Price 
} from './styles';
import image from '../../assets/cripto.jpg';
import weth from '../../assets/eth.png'

export const Explore = () => {
  return(
    <CollectionCardContainer>
      <CollectionCard>
        <img src={image} alt='' />
        <Details>
          <Name>
            HackPunk
          </Name>
          <PriceContainer>
            <img src={weth} alt='ethereum' />
            <Price>1.0</Price>
          </PriceContainer>
        </Details>
      </CollectionCard>

      <CollectionCard>
        <img src={image} alt='' />
        <Details>
          <Name>
            HackPunk
          </Name>
          <PriceContainer>
            <img src={weth} alt='ethereum' />
            <Price>1.0</Price>
          </PriceContainer>
        </Details>
      </CollectionCard>

      <CollectionCard>
        <img src={image} alt='' />
        <Details>
          <Name>
            HackPunk
          </Name>
          <PriceContainer>
            <img src={weth} alt='ethereum' />
            <Price>1.0</Price>
          </PriceContainer>
        </Details>
      </CollectionCard>
      
    </CollectionCardContainer>
  )
}