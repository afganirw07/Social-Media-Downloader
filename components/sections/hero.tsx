import { InputInputGroup } from "../features/url-input";
import { PLATFORMS, FEATURES_DATA } from "@/lib/constants";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface BadgeProps {
    title: string;
    icon: any;
    iconColor: string;
    bgColor: string;
    borderColor: string;
    gradientColor: string;
}

const FeatureBadge = ({ title, icon: Icon, iconColor, bgColor, borderColor, gradientColor }: BadgeProps) => (
    <div className={`group relative flex items-center gap-2 rounded-full border ${borderColor} bg-linear-to-r ${gradientColor} to-transparent px-5 py-2.5 text-sm font-medium text-black shadow-lg transition-all duration-300`}>
        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${bgColor}`}>
            <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
        <span>{title}</span>
    </div>
);

export default function Hero() {
    return (
        <section className="mt-16 flex flex-col justify-center items-center py-16 px-4 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center text-black max-w-4xl md:max-w-6xl">
                Download Videos From Any Social Media Instantly
            </h1>

            <p className="mt-6 text-md md:text-xl text-center text-gray-600 max-w-2xl">
                Download videos from any social media platform in high quality. Just paste the link and download instantly.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
                {FEATURES_DATA.map((feature) => (
                    <FeatureBadge key={feature.title} {...feature} 
                    />
                ))}

                <div className="w-full max-w-xl mt-4">
                    <InputInputGroup />
                </div>
            </div>

            {/* Platform icons */}
            <div className="flex gap-6 mt-6 text-3xl text-gray-700">
                {PLATFORMS.map((platform) => (
                    <Tooltip key={platform.id}>
                        <TooltipTrigger asChild>
                            <div className={`${platform.color} transition-all cursor-pointer hover:scale-110`}>
                                <platform.icon className="w-10 h-10" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{platform.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </section>
    );
}