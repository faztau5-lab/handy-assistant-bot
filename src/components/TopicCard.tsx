import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Topic } from "@/types/topic";

interface TopicCardProps {
  topic: Topic;
}

const levelConfig = {
  basic: { label: "Базовый", color: "bg-green-500" },
  intermediate: { label: "Средний", color: "bg-yellow-500" },
  advanced: { label: "Продвинутый", color: "bg-red-500" },
};

export const TopicCard = ({ topic }: TopicCardProps) => {
  const level = levelConfig[topic.level];

  return (
    <Link to={`/learn/${topic.id}`}>
      <Card className="card-hover cursor-pointer h-full">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${level.color}`} />
            <span className="text-xs text-muted-foreground">{level.label}</span>
          </div>
          <CardTitle className="text-xl">{topic.title}</CardTitle>
          <CardDescription>{topic.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
