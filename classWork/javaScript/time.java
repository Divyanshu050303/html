// print the satrt pattern?
 class Star {

    public static void main(String[] args) {

        int[] dots = new int[] {4, 3, 0, 1, 0, 3, 4};
        int width= 9;

        for (int i = 0; i < dots.length; i++) {
            for (int j = 0; j < width; j++) {
                if (j < dots[i] || j > width - dots[i] - 1) {
                    System.out.print(".");
                } else {
                    System.out.print("*");
                }
            }
            System.out.println();
        }

    }
}






