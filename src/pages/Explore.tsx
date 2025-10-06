import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { TopicCard } from "@/components/TopicCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import topicsData from "@/data/topics.json";
import { useSearchParams } from "react-router-dom";
import { Topic } from "@/types/topic";

const Explore = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTopics = (topicsData as Topic[]).filter((topic) => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = selectedLevel === "all" || topic.level === selectedLevel;
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const categories = Array.from(new Set((topicsData as Topic[]).map(t => t.category)));
  const levels = ["basic", "intermediate", "advanced"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Explore Topics
            </h1>

            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Поиск по темам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-muted-foreground" />
                  <span className="text-sm font-medium">Уровень:</span>
                  <Button
                    variant={selectedLevel === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel("all")}
                  >
                    Все
                  </Button>
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level === "basic" ? "🟢 Базовый" : level === "intermediate" ? "🟡 Средний" : "🔴 Продвинутый"}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium self-center">Категория:</span>
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                >
                  Все
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-4 text-muted-foreground">
              Найдено тем: {filteredTopics.length}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  Темы не найдены. Попробуйте изменить критерии поиска.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
