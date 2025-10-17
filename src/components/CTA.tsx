import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're in! 🎊",
        description: "We'll let you know as soon as we drop. See you soon!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-[0_0_50px_hsl(var(--primary)/0.1)]">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Upgrade Your Inbox?
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Be the first to experience email that doesn't suck. Join the waitlist now.
            </p>
            
            <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 text-lg bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
              <Button 
                type="submit"
                size="lg"
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group"
              >
                Let's Go
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground">
              No spam ever. That's literally the whole point. 😎
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
