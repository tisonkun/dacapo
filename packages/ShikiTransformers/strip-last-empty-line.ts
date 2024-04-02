import type {ShikiTransformer} from 'shiki'

export function stripLastEmptyLine(): ShikiTransformer {
    return {
        code(code) {
            const line = code.children.pop()
            if (line && line.type !== 'element') {
                code.children.push(line)
            } else if (line && line.children.length) {
                code.children.push(line)
            }
        },
    }
}
