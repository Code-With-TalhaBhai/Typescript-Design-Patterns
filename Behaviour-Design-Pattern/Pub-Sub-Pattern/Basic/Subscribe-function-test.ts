import { SubscribeFunction } from "./Subscribe-fuction";


const sub = SubscribeFunction<string>();


const unsub = sub.Subscribe((msg:string)=>console.log("This subscription is from : ",msg));

sub.publish("Talha");
sub.publish("Bhai");
console.log("Function unsubscribed");

unsub();
sub.publish("Independence");






