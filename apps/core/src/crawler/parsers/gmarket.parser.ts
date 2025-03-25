import { Parser } from './parser.interface';
import {Injectable} from "@nestjs/common";

@Injectable()
export class GmarketParser implements Parser {
    parse(html: string) {
        return html;
    }
}
