import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  { name: "Basic", price: 19, features: ["Task Management", "Collaboration Tools", "Basic Analytics"] },
  {
    name: "Pro",
    price: 49,
    features: ["Task Management", "Advanced Collaboration", "Team Analytics", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["Custom Task Workflows", "Advanced Security", "Dedicated Account Manager", "API Access"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-base font-normal text-gray-500">/month</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

