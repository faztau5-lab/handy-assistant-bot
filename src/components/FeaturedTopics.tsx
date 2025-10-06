import { TopicCard } from "./TopicCard";
import topicsData from "@/data/topics.json";
import { Topic } from "@/types/topic";

export const FeaturedTopics = () => {
  const featuredTopics = (topicsData as Topic[]).slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Популярные темы недели
          </h2>
          <p className="text-muted-foreground text-lg">
            Темы, которые стоит понять
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};
