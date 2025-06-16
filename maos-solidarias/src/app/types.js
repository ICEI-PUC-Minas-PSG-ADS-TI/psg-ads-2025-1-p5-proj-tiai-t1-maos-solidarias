import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FolderIcon from '@mui/icons-material/Folder';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TabletTwoToneIcon from '@mui/icons-material/TabletTwoTone';
import TravelExploreTwoToneIcon from '@mui/icons-material/TravelExploreTwoTone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlaceIcon from '@mui/icons-material/Place';
import SpaIcon from '@mui/icons-material/Spa';

export const ongsSectionData = [
  { icon:  <AppRegistrationIcon />, title: "Registro", description: "Como uma organização sem fins lucrativos, você pode se registrar como proprietário de um perfil." },
  { icon: <FolderIcon />, title: "Crie seu perfil exclusivo", description: "Adicione conteúdo envolvente e recursos visuais cativantes para mostrar a missão da sua ONG." },
  { icon: <PlaylistAddCheckIcon />, title: "Verifique o status da sua ONG", description: "Passe pelo processo de verificação para garantir a autenticidade." },
  { icon: <DoneAllIcon />, title: "Publique e torne-se global", description: "Após a verificação, publique seu perfil para torná-lo visível em nossa rede." }
];

export const benefitsSectionData = [
  { 
    icon: <PlaceIcon style={{ color: 'green' }} />, 
    title: "Aumente sua visibilidade", 
    description: "Junte-se à nossa plataforma para aumentar a visibilidade da sua organização e alcançar um público mais amplo."
  },
  {
    icon: <SpaIcon style={{ color: 'green' }} />, 
    title: "Acesso a recursos", 
    description: "Tenha acesso a uma infinidade de recursos, treinamento e suporte para fortalecer sua missão."
  }
];

export const donorsSectionData = [
  {
    icon: <TabletTwoToneIcon />, 
    title: "Registro",
    description: "Crie sua conta em poucos passos e comece a transformar vidas com apenas alguns cliques."
  },
  {
    icon: <TravelExploreTwoToneIcon />,
    title: "Explore ONGs inspiradoras",
    description: "Navegue por organizações verificadas de diversas causas e conheça as que mais tocam você."
  },
  {
    icon: <ThumbUpOffAltIcon />,
    title: "Escolha como ajudar",
    description: "Decida como contribuir (financeiramente, com produtos ou serviços) e quanto doar. Você tem controle total."
  },
  {
    icon: <VolunteerActivismIcon />,
    title: "Doe com propósito",
    description: "Seja parte de uma comunidade global de impacto social e contribua com causas reais, de forma transparente e segura."
  }
];

export const donationsSectionData = [

]

export const donationsData = [
    {
        image: '/donate1.png',
        title: 'Alimente os famintos',
        description: 'Ajude a fornecer refeições para crianças carentes.'
    },
    {
        image: '/donate2.png',
        title: 'Assistência em caso de desastre',
        description: 'Dê suporte às comunidades afetadas por desastres naturais.'
    },
    {
        image: '/donate3.png',
        title: 'Fundo Terra Verde',
        description: 'Contribua para o reflorestamento e a mitigação das mudanças climáticas.'
    }
];


