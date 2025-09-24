"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterBase from '@/components/footer/FooterBase';
import { PiggyBank, BarChart, Users } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="MemeBurst Logo"
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How To Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' },
          ]} />
      </div>

      <div id="hero" data-section="hero">
        <FrameHero
          title="Welcome to MemeBurst!"
          description="Join us in the world of meme coins!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More" />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          description="MemeBurst is a community-driven memecoin that captures the fun and excitement of the cryptocurrency world." />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Our tokenomics ensure sustainable growth and community benefits."
          kpiItems={[
            { value: '1M', description: 'Total Supply', longDescription: 'The total amount of MemeBurst coins available.', icon: PiggyBank },
            { value: '500K', description: 'Circulating Supply', longDescription: 'The amount currently in circulation.', icon: BarChart },
            { value: '100K', description: 'Community Fund', longDescription: 'Funds allocated to community initiatives.', icon: Users },
          ]} />
      </div>

      <div id="faq" data-section="faq">
        <ImageFAQ
          items={[
            { title: 'What is MemeBurst?', content: 'MemeBurst is a playful memecoin that embrace the fun side of cryptocurrencies.' },
            { title: 'How can I buy MemeBurst?', content: 'You can buy MemeBurst on various decentralized exchanges!' },
          ]} />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            { title: 'Get Involved', items: [{ label: 'Join our Discord', onClick: () => alert('Discord link clicked')}] },
          ]}
          copyrightText="© 2023 MemeBurst. All rights reserved."
          onPrivacyClick={() => alert('Privacy Policy clicked')} />
      </div>
    </SiteThemeProvider>
  );
}
