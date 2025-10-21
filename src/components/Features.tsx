import { Shield, Zap, Palette, Lock, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "No loading screens. No waiting. Just instant vibes. Your emails load faster than your TikTok FYP.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data isn't for sale. We're not like those other email services. Your business stays your business.",
  },
  {
    icon: Palette,
    title: "Aesthetic AF",
    description: "Customize everything. Dark mode? Obviously. Custom themes? You know it. Make it yours.",
  },
  {
    icon: Lock,
    title: "Spam-Free Zone",
    description: "Our AI actually knows what spam is. No more newsletters you never signed up for. Pure inbox zen.",
  },
  {
    icon: Sparkles,
    title: "Smart Features",
    description: "AI that gets you. Auto-categorize, smart replies, and features that actually make sense. No boomer stuff.",
  },
  {
    icon: Users,
    title: "Built for You",
    description: "Made by Gen Z, for Gen Z. We get it because we are it. This isn't your parent's email.",
  },
];

const Features = () => {
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black">
            Why u4ia{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Slaps Different
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything the others got wrong, we got right
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
