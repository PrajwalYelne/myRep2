// package CollectionsAndMap.iAssess_2;

import java.util.ArrayList;

public class UserBO extends ArrayList<User> {
    public static UserBO getList() {
        UserBO u = new UserBO();
        u.add(new User("mohan Raja", "9874563210", "mohan", "mohan@abc.in"));
        u.add(new User("arjun Ravi", "4324237", "arjun", "arjun@abc.in"));
        return u;
    }
  }
}
