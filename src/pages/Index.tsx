import EmailSignup from '@/components/EmailSignup';
import FloatingOrbs from '@/components/FloatingOrbs';
import SocialLinks from '@/components/SocialLinks';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen gradient-background relative overflow-hidden">
      <FloatingOrbs />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">M</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Mudgaland
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                Something amazing is brewing
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4 animate-fade-up-delayed">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                We're{' '}
                <span className="text-gradient-gold glow-text">Coming Soon</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Mudgaland Company is crafting an exceptional experience for you. 
                Stay tuned for something extraordinary.
              </p>
            </div>

            {/* Email Signup */}
            <div className="animate-fade-up-delayed-2 pt-4">
              <EmailSignup />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              © 2024 Mudgaland Company. All rights reserved.
            </p>
            <div className="order-1 md:order-2">
              <SocialLinks />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
